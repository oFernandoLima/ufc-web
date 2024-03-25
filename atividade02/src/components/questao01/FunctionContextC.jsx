import ColorTheme from './MyColorContext'

const FunctionContextC = () => {
  return (
    <ColorTheme.Consumer>
      {(value) => {
        return (
          <div>
            <h1 style={{ backgroundColor: value.bkgC }}>Contexto C</h1>
          </div>
        )
      }}
    </ColorTheme.Consumer>
  )
}

export default FunctionContextC
