import DivLeft from "./DivLeft"
import Divright from "./Divright"


function Section() {
  return (
    <div className="mt-10 border border-spacing-2 border-[#8b7d71]  mb-10 p-3 grid grid-cols-1 sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 ">
      <DivLeft/>
      <Divright/>
    </div>
  )
}

export default Section
