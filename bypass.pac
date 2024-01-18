function FindProxyForURL(url, host) {
    // Do not use proxy for .js and .json files
    if (shExpMatch(url, "*.js") || shExpMatch(url, "*.json")) {
        return "DIRECT";
    }

    // Use proxy for all other requests
    return "PROXY proxy.packetstream.io:31112";
}
