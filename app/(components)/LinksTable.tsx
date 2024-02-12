const dummyLinks = [
  {
    id: 1,
    shortLink: "https://dash.ly/uhjkluy",
    originalLink: "https://test-review-ap.myshopify.com/admin/oauth/authorize?client_id=570095e20",
    clicks: 25,
    dateCreated: "Sep 24, 2024",
  },
  {
    id: 2,
    shortLink: "https://dash.ly/uhjkluy",
    originalLink: "https://test-review-ap.myshopify.com/admin/oauth/authorize?client_id=570095e20b1937221e5c687jknejkcnwkejncwekjncwejknfiwhruih23iodjawkdmqwlknfasdlcnksdmkfnqweiofjiowejo",
    clicks: 10,
    dateCreated: "Sep 24, 2024",
  },
  {
    id: 3,
    shortLink: "https://dash.ly/uhjkluy",
    originalLink: "https://test-review-ap.myshopify.com/admin/oauth/authorize?client_id=570095e20b1937221e",
    clicks: 32,
    dateCreated: "Sep 24, 2024",
  },
];

export default function LinksTable() {
  return (
    <div className="mt-4 overflow-auto rounded-lg shadow">
      <table className="w-full border-collapse bg-white border rounded-lg">
        <thead className="bg-gray-300">
          <tr>
            <th className="py-3 px-4 text-sm font-semibold text-left border-b">SHORT LINK</th>
            <th className="py-3 px-4 text-sm font-semibold text-left border-b">ORIGINAL LINK</th>
            <th className="py-3 px-4 text-sm font-semibold text-left border-b">CLICKS</th>
            <th className="py-3 px-4 text-sm font-semibold text-left border-b">DATE CREATED</th>
          </tr>
        </thead>

        <tbody>
          {dummyLinks.map((link, index) => (
            <tr key={link.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-3 px-4 text-sm text-gray-700">{link.shortLink}</td>
              <td className="py-3 px-4 text-sm text-gray-700 break-all">{link.originalLink}</td>
              <td className="py-3 px-4 text-sm text-gray-700">{link.clicks}</td>
              <td className="py-3 px-4 text-sm text-gray-700">{link.dateCreated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}