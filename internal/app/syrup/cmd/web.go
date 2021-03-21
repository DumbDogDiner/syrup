package cmd

import (
	"github.com/dumbdogdiner/syrup/internal/app/syrup/web"
	"github.com/rs/zerolog/log"
	"github.com/spf13/cobra"
)

var webCmd = &cobra.Command{
	Use:   "web",
	Short: "Initialize the web server",
	Run: func(cmd *cobra.Command, args []string) {
		log.Info().Msg("Initializing syrup web server...")
		server := web.NewSyrupServer(web.Config{
			Port: 3000,
		})
		server.RegisterRoutes()
		server.Listen()
	},
}

func init() {
	rootCmd.AddCommand(webCmd)
}
