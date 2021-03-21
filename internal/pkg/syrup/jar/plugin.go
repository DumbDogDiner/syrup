package jar

// CommandInfo provides information about a specific command.
type CommandInfo struct {
	Usage   string   `yaml:"usage"`
	Aliases []string `yaml:"aliases"`
}

// PluginInfo represents a plugin's plugin.yml file.
type PluginInfo struct {
	Main       string                 `yaml:"main"`
	Name       string                 `yaml:"name"`
	Version    string                 `yaml:"version"`
	Authors    []string               `yaml:"authors"`
	APIVersion string                 `yaml:"api-version"`
	Softdepend []string               `yaml:"softdepend"`
	Commands   map[string]CommandInfo `yaml:"commands"`
}
