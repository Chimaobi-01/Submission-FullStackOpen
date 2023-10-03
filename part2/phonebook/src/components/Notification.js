

export default function Notification({ message }) {
    let color = ''
    if(message) {
        color = message.includes('Information')? 'red': 'green'
    }
    const messageColor = {
        color,
    }

    if(message === null) {
        return null
    }
  return (
    <div className="success" style={messageColor} >
        { message }
    </div>
  )
}
