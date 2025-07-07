# win-ga

Simple HTA application as customised assistant.


## Notes

- `commandLine` is access through application `ID` as string, 
    after splitting by space, there is an empty element at `split(" ")[1]`
- to submit form without submit button [stackoverflow](https://stackoverflow.com/a/477699)
    a `hidden` attribute is added
- `wscript.shell` can utilise relative path, and it is relative to the root position of `.hta` file

### Unsupported HTML

### Unsupported javascript

### Unsupported css

