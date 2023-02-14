const useStyles = () => ({
  containerStepper: {
    display: "flex",
    justifyContent: "center"
  },
  stepper: {
    marginTop: '3rem',
    marginBottom: '3rem',
    width: '70%',
    alignItems: 'center',
    '& .MuiStepLabel-label.Mui-active': { color: '#fafafa', },
    '& .MuiStepLabel-label.Mui-completed': {
      color: '#DDD750'
    },
    '& .MuiStepConnector-root': {
      top: '22px',
      left: 'calc(-50% + 25px)',
      right: 'calc(50% + 25px)',
    },
    '& .Mui-active': {
      color: '#FBF459',
      fill: '#fAfafa',
    },
    '& .css-117w1su-MuiStepIcon-text': {
      fill: '#000000',
      color: '#000000',
    },
    '& .Mui-completed': {
      fill: '#FBF459',
      color: '#fafafa',
    },
    '& .MuiStepIcon-root': {
      color: '#fafafa',
      fontSize: '50px',
    },
    '& .MuiStepLabel-label': {
      color: '#fafafa',
    },
  },
})

export default useStyles
