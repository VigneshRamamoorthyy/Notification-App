const Notification = props => {
  const {className, message, iconUrl} = props
  const containerClassName = `notification-container ${className}`
  return (
    <div className={containerClassName}>
      <img className='icon' src={iconUrl} />
      <p className='message'>{message}</p>
    </div>
  )
}

const element = (
  <div className='bg-container'>
    <h1 className='main-heading'>Notifications</h1>

    <Notification
      className='info-msg'
      message='Information Message'
      iconUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
    />

    <Notification
      className='success-msg'
      message='Success Message'
      iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
    />

    <Notification
      className='warning-msg'
      message='Warning Message'
      iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
    />

    <Notification
      className='danger-msg'
      message='Danger Message'
      iconUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
