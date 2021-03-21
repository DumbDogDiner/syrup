package jar

import (
	"archive/zip"
	"bytes"
	"crypto/sha256"
	"errors"
	"fmt"
	"io/ioutil"
	"strings"

	"gopkg.in/yaml.v2"
)

type JarHash struct {
	raw [32]byte
}

func (h *JarHash) String() string {
	return fmt.Sprintf("%x", h.raw)
}

// ComputeJarSHA computes the SHA-256 hash of the target jar.
func ComputeJarSHA(path string) (*JarHash, error) {
	bytes, err := ioutil.ReadFile(path)
	if err != nil {
		return nil, err
	}
	return &JarHash{raw: sha256.Sum256(bytes)}, nil
}

// ReadJarConfig reads the plugin.yml file of a Spigot plugin.
func ReadJarConfig(path string) (*PluginInfo, error) {
	reader, err := zip.OpenReader(path)
	if reader == nil {
		return nil, err
	}

	for _, f := range reader.File {
		if !strings.HasPrefix(f.Name, "plugin.yml") {
			continue
		}
		r, err := f.Open()
		if err != nil {
			return nil, err
		}
		buff := new(bytes.Buffer)
		buff.ReadFrom(r)

		info := PluginInfo{}
		yaml.Unmarshal(buff.Bytes(), &info)

		return &info, nil
	}

	return nil, errors.New("failed to find a valid plugin.yml file in the target jar")

}
