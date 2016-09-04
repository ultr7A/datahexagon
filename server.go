package main

import (
	"io"
	"net/http"
	"os"
)

func dataHandler(w http.ResponseWriter, r *http.Request) {
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
			dst, err := os.Create("/home/sanat/" + part.FileName())
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

func main() {
	http.HandleFunc("/data", dataHandler)

	//static file handler.
	http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("web"))))

	//Listen on port 8080
	http.ListenAndServe(":80", nil)
}
