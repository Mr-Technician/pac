function FindProxyForURL(url, host) {
    // Bypass the proxy for URLs that match the specific path'
    alert(url);
    if (url.indexOf("ip-api.com/json") !== -1) {
        return "DIRECT";
    }

    // Use the proxy for all other URLs
    return "http://proxy.packetstream.io:31112";
}
