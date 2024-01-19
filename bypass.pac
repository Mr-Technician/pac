function FindProxyForURL(url, host) {
    // Do not use proxy for .js and .json files
    if (url == "https://ipv4.icanhazip.com/") {
        return "PROXY proxy.packetstream.io:31112";
    }

    // Use proxy for all other requests
    return "DIRECT";
}
