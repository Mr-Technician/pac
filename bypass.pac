function FindProxyForURL(url, host) {
    // Bypass the proxy for URLs that match the specific path'
    alert(url);
    if (url.indexOf("ip-api.com/json") !== -1
    || url.indexOf("www.amtrak.com/etc/designs") !== -1
    || url.indexOf("www.amtrak.com/akam") !== -1
    || url.indexOf("www.amtrak.com/services") !== -1
    ) {
        return "DIRECT";
    }

    // Use the proxy for all other URLs
    return "PROXY proxy.packetstream.io:31112";
}
