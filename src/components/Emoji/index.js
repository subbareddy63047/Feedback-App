import './index.css'

const Emoji = props => {
  const {each, subbu} = props
  const {name, imageUrl} = each
  const clicked = () => {
    subbu()
  }
  return (
    <li className="container">
      <img className="images" src={imageUrl} alt={name} onClick={clicked} />
      <p className="para">{name}</p>
    </li>
  )
}
export default Emoji
