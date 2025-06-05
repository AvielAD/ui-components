const Index = (props: { elements: Array<{ title: string, status: string, fecha1: string, fecha2: string }> }) => (
  <div className="">
    <div className="w-full rounded-lg shadow-2xs">
      <div className="w-full">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr
              className="text-xs font-semibold tracking-wide text-left text-secondary-500 uppercase border-b "
            >
              <th className="py-3">Equipo</th>
              <th className="py-3">Status</th>
              <th className="py-3">Fecha Recepcion</th>
              <th className="py-3">Fecha Entrega</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {props.elements.map((item, index) => (
              <tr key={index} className="text-secondary-700 dark:text-secondary-400">
                <td className="py-3">{item.title}</td>
                <td className="py-3">{item.status}</td>
                <td className="py-3">{item.fecha1}</td>
                <td className="py-3">{item.fecha2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default Index