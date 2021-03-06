import { makeStyles } from "@material-ui/core";

const useRegisterFormStyles = makeStyles({
  form: {
    height: '100vh',
    width: 'min(350px, 100vw)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '0 6px',
    marginTop: 20
  },
  
  inputsWrapper: {
    width: "100%",
    marginBottom: 35,
  }
})

export default useRegisterFormStyles