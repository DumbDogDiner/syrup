package web

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/zerolog/log"
)

// Config contains server configuration.
type Config struct {
	Port int
}

// SyrupServer represents the syrup web server.
type SyrupServer struct {
	Config Config
	Router *mux.Router
}

// NewSyrupServer creates a new web server with the specified config.
func NewSyrupServer(config Config) *SyrupServer {
	return &SyrupServer{
		Config: config,
	}
}

// Listen starts the server listening on the target port.
func (server *SyrupServer) Listen() {
	log.Info().Msgf("Server ready to serve requests on port %d", server.Config.Port)
	http.ListenAndServe(fmt.Sprintf("0.0.0.0:%d", server.Config.Port), server.Router)
}
