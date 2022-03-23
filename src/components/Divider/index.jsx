import './divider.styles.scss';

export default function Divider() {
  return (
    <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 md:gap-x-3">
      <div className="col-start-2 col-span-10">
        <span className="divider"></span>
      </div>
    </div>
  )
}