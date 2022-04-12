interface Props {
  title: string;
  counts: { [index: string]: number }
}

export const CountTable = ({ title, counts }: Props) => {
  return (
    <div>
      <h2 className="text-xl p-2">
        {title}
      </h2>
      <table className="table-auto border-collapse text-left">
        <thead>
          <tr>
            <th className="border p-1">Signer</th>
            <th className="border p-1">Count</th>
          </tr>
        </thead>
        <tbody>

        {Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([signer, count]) => (
          <tr>
            <td className="border p-1">{signer}</td>
            <td className="border p-1">{count}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}