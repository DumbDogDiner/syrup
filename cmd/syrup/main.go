package main

import (
	"os"

	"github.com/dumbdogdiner/syrup/internal/app/syrup/cmd"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

func init() {
	log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})
}

func main() {
	cmd.Execute()
}
