package application

import (
	"context"
	"fmt"
)

// App struct
type App struct {
	ctx context.Context

	readyCh chan bool
}

// NewApp creates a new App application struct
func New() *App {
	return &App{
		readyCh: make(chan bool, 1),
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) OnStartup(ctx context.Context) {
	a.ctx = ctx

	// Do app init logic here
	// call a.signalFailureAndAbort() if there's a critical failure

	a.signalReady()
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
