import ColorTheme from './MyColorContext'

const FunctionContextD = () => {
  return (
    <ColorTheme.Consumer>
      {(value) => {
        return (
          <div>
            <h1 style={{ backgroundColor: value.bkgD }}>Contexto D</h1>
          </div>
        )
      }}
    </ColorTheme.Consumer>
  )
}

export default FunctionContextD
