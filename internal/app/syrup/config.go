package syrup

import (
	"fmt"
	"os"
	"os/user"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

func init() {
	cobra.OnInitialize(InitializeConfig)
}

func getConfigDirectory() string {
	usr, err := user.Current()
	if err != nil {
		panic(err)
	}
	return fmt.Sprintf("%s%s", usr.HomeDir, "/.config/syrup")
}

// InitializeConfig sets up Syrup's configuration.
func InitializeConfig() {
	// create directory if it does not exist
	if _, err := os.Stat(getConfigDirectory()); err != nil {
		err := os.Mkdir(getConfigDirectory(), 0755)
		if err != nil {
			panic(err)
		}
	}

	viper.SetConfigName("syrup")
	viper.SetConfigType("toml")
	viper.AddConfigPath(getConfigDirectory())

	if err := viper.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); ok {
			err = viper.SafeWriteConfig()
			if err != nil {
				panic(err)
			}
		} else {
			panic("failed to read config")
		}
	}
}
