
const allSites = {
"0":
{"id":1,"customerId":81001,"siteName":"GEORGE STREET","address":"36 GEORGE STREET","spotsNum":60,"baseTime":0.5,"casualRate":4,"dailyMax":24,"weekendRate":12,"weekendDuration":9,"city":null,"image":null,"schema":null,"latitude":null,"longitude":null},
"1":
{"id":2,"customerId":81002,"siteName":"GREAT SOUTH ROAD","address":"100 GREAT SOUTH ROAD","spotsNum":80,"baseTime":1,"casualRate":4,"dailyMax":30,"weekendRate":12,"weekendDuration":6,"city":null,"image":null,"schema":null,"latitude":null,"longitude":null},
"2":
{"id":3,"customerId":81003,"siteName":"KHYBER PASS","address":"159 Khyber Pass Road","spotsNum":50,"baseTime":0.5,"casualRate":8,"dailyMax":16,"weekendRate":16,"weekendDuration":12,"city":null,"image":null,"schema":null,"latitude":null,"longitude":null},
"3":
{"id":4,"customerId":82002,"siteName":"TUAM STREET","address":"189 Tuam Street, ChristChurch CBD","spotsNum":150,"baseTime":1,"casualRate":3,"dailyMax":24,"weekendRate":12,"weekendDuration":6,"city":null,"image":null,"schema":null,"latitude":null,"longitude":null}
}

export const SiteList = () => {
    return (
        <div className="SiteList">
            <h1>Sites</h1>
            <ul>
                {Object.values(allSites).map(site => (
                    <li key={site.id}>
                       {site.customerId} {'-->'}  {site.siteName}
                    </li>
                ))}
            </ul>
        </div>
    )
}