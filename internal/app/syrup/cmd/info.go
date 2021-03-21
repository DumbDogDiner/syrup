package cmd

import (
	"os"
	"strings"

	"github.com/dumbdogdiner/syrup/internal/pkg/syrup/jar"
	"github.com/rs/zerolog/log"
	"github.com/spf13/cobra"
)

var infoCommand = &cobra.Command{
	Use:   "info [path]",
	Short: "Read version information about the target jar.",
	Long: `Extract and read the plugin.yml information of the target jar,
printing out version, author, and jar hash information.`,
	Args: cobra.ExactArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		config, err := jar.ReadJarConfig(args[0])
		if err != nil {
			log.Fatal().AnErr("error", err).Msg("Failed to fetch jar information")
			os.Exit(1)
		}

		if config == nil {
			log.Error().Msg("Could not find a valid plugin.yml file")
			os.Exit(0)
		}

		log.Info().Msg("---- Plugin Information ----")
		log.Info().Msgf("Name: %s", config.Name)
		log.Info().Msgf("Authors: %s", strings.Join(config.Authors, ", "))
		log.Info().Msgf("Version: v%s", config.Version)
		log.Info().Msg("----------------------------")

		hash, err := jar.ComputeJarSHA(args[0])
		if err != nil {
			panic(err)
		}
		log.Info().Msgf("Jar hash: %s", hash.String())
	},
}

func init() {
	rootCmd.AddCommand(infoCommand)
}
