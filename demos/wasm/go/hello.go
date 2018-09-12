package main

import (
	"fmt"
	"syscall/js"
)

func main() {
	fmt.Println("Hello, from Go!")

	alert := js.Global().Get("alert")
	alert.Invoke("Hello, from Go!")
}
