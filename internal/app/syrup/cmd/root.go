package cmd

import (
	"github.com/dumbdogdiner/syrup/internal/app/syrup"
	"github.com/spf13/cobra"
)

var (
	rootCmd = &cobra.Command{
		Use:   "syrup",
		Short: "A jar version manager for Pterodactyl",
		Long: `Syrup is an interactive jar version manager for Pterodactyl.
It allows for simple configuration of jars across multiple server instances,
ensuring plugin versions are consistent across your network.`,
	}
)

func init() {
	cobra.OnInitialize(syrup.InitializeConfig)
}

// Execute executes the root command.
func Execute() error {
	return rootCmd.Execute()
}
