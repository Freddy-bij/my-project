import Icones from "./Icones"
import Paragraph from "./Paragraph"


function DivLeft() {
  return (
    <div className="flex flex-col justify-between mt-4 ml-4">
      <Paragraph/>
      <Icones/>
    </div>
  )
}

export default DivLeft
