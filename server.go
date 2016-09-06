package main

import (
	"io"
	"net/http"
	"os"
	"path"
	"runtime"
)

func handleAPI(w http.ResponseWriter, r *http.Request) {
	_, filename, _, _ := runtime.Caller(1)
	switch r.Method {
	//GET needs to do a directory listing...

	case "GET":

	case "POST":
		//get the multipart reader for the request.
		reader, err := r.MultipartReader()

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		//copy each part to destination.
		for {
			part, err := reader.NextPart()
			if err == io.EOF {
				break
			}
			if part.FileName() == "" {
				continue
			}
			dst, err := os.Create(path.Join(path.Dir(filename), "/data/", part.FileName() ))
			defer dst.Close()

			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			if _, err := io.Copy(dst, part); err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
		}
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

func handleAccounts(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		/* load settings ? */

	case "POST":
			/* sign up  / in */


	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

func handleSharing(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		/* load shares */

	case "POST":
			/* create / modify share */


	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}




func main() {

	http.HandleFunc("/api", handleAPI) // file storage
	http.HandleFunc("/accounts", handleAccounts) // auth
	http.HandleFunc("/share", handleSharing) // shared folders

	//static file handler.
	http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("web"))))

	//Listen on port 8080
	http.ListenAndServe(":80", nil)
}
