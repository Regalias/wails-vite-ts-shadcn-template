package application

import (
	"os"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (a *App) signalReady() {
	// This will panic if called twice, so don't :)
	a.readyCh <- true
	close(a.readyCh)
}

func (a *App) signalFailureAndAbort(title string, err error) {

	_, dialogErr := runtime.MessageDialog(a.ctx, runtime.MessageDialogOptions{
		Type:    runtime.ErrorDialog,
		Title:   title,
		Message: err.Error(),
	})
	if dialogErr != nil {
		// todo: log something
	}
	os.Exit(1)
}

func (a *App) AwaitReady() {
	<-a.readyCh
}
