package cmd

import (
	"github.com/spf13/cobra"
)

var versionCmd = &cobra.Command{
	Use:   "version",
	Short: "Print the version information of Syrup",
	Run: func(cmd *cobra.Command, args []string) {
		println("syrup v1.0.0")
	},
}

func init() {
	rootCmd.AddCommand(versionCmd)
}
