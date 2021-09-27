import { firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { signOut } from './reducers/actions/signOut';
import Header from './componets/Header';
import {Link} from 'react-router-dom'

function Dashboard(props) {
 
  const {users,logout} = props;

  const handleClick = () =>{
    logout()
  }

    return(
      <div>
      <Header />
      <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="card avatar-container d-flex flex-direction-column justify-content-center ">
              <div className="mt-3 text-center align-self-center"> 
              <img className="mx-auto " style={{width:"65px"}} src="assets/icons/user.png" />
              <h5 className="text-center mt-2">Welcome </h5>
              <p className="text-center">Allen Muchini</p>
              <div className="mx-5">
                <hr></hr>
              </div>

              <p className="text-center"><strong>Balance</strong></p>
              <p className="text-center">USD 24.99</p>
              <p className="text-center">RTGS 15 154.99</p>

              <div className="mx-5">
                <hr></hr>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
          <div className="row mt-4">
          <div className="card col-md-5 m-1 card-options" Link="/rtgstransactions">
          <Link to="/rtgstransactions">
          <img className="mx-auto" style={{width:"50px"}} src="assets/icons/zimbabwe.png" />
              <p className="text-center m-auto">RTGS Transaction</p>
              </Link>
            </div>
            <div className="card col-md-5 m-1 card-options" Link="/usdtransactions">
            <Link to="/usdtransactions">
              <img className="mx-auto" style={{width:"50px"}} src="assets/icons/united-states.png" />
              <p className="text-center m-auto">USD Transaction</p>
              </Link>
            </div>
            </div>
          <div className="row mt-4 ">
          <div className="card col-md-5 m-1 card-options" Link="statements">
          <Link to="/transfares">
              <img className="mx-auto" style={{width:"50px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3Ny44NTkgNDc3Ljg1OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDcyLjg2MywxNzUuNjYyTDM1My4zOTYsNTYuMTk1Yy02LjY2Ni02LjY2NC0xNy40NzItNi42NjItMjQuMTM2LDAuMDA0Yy0zLjE5OSwzLjItNC45OTYsNy41MzgtNC45OTcsMTIuMDYzdjUxLjIgICAgSDIwNC43OTZjLTkuNDI2LDAtMTcuMDY3LDcuNjQxLTE3LjA2NywxNy4wNjdjMCw5LjQyNiw3LjY0MSwxNy4wNjcsMTcuMDY3LDE3LjA2N0gzNDEuMzNjOS40MjYsMCwxNy4wNjctNy42NDEsMTcuMDY3LTE3LjA2NyAgICBWMTA5LjQ2bDc4LjI2OCw3OC4yNjhsLTc4LjI2OCw3OC4yNjh2LTI3LjA2OGMwLTkuNDI2LTcuNjQxLTE3LjA2Ny0xNy4wNjctMTcuMDY3SDE1My41OTZ2LTUxLjIgICAgYy0wLjAwMi05LjQyNi03LjY0NS0xNy4wNjUtMTcuMDctMTcuMDYzYy00LjUyNCwwLjAwMS04Ljg2MywxLjc5OC0xMi4wNjMsNC45OTdMNC45OTcsMjc4LjA2MiAgICBjLTYuNjYzLDYuNjY1LTYuNjYzLDE3LjQ2OCwwLDI0LjEzMmwxMTkuNDY3LDExOS40NjdjMy4yLDMuMjAxLDcuNTQsNSwxMi4wNjYsNS4wMDFjMi4yNDMsMC4wMDcsNC40NjYtMC40MzQsNi41MzYtMS4yOTcgICAgYzYuMzc2LTIuNjQ0LDEwLjUzMi04Ljg2NywxMC41My0xNS43N3YtNTEuMmgxMTkuNDY3YzkuNDI2LDAsMTcuMDY3LTcuNjQxLDE3LjA2Ny0xNy4wNjdzLTcuNjQxLTE3LjA2Ny0xNy4wNjctMTcuMDY3SDEzNi41MyAgICBjLTkuNDI2LDAtMTcuMDY3LDcuNjQxLTE3LjA2NywxNy4wNjd2MjcuMDY4bC03OC4yNjgtNzguMjY4bDc4LjI2OC03OC4yNjh2MjcuMDY4YzAsOS40MjYsNy42NDEsMTcuMDY3LDE3LjA2NywxNy4wNjdoMTg3LjczMyAgICB2NTEuMmMwLjAwMiw5LjQyNiw3LjY0NSwxNy4wNjUsMTcuMDcsMTcuMDYzYzQuNTI0LTAuMDAxLDguODYzLTEuNzk4LDEyLjA2My00Ljk5N2wxMTkuNDY3LTExOS40NjcgICAgQzQ3OS41MjUsMTkzLjEyOSw0NzkuNTI1LDE4Mi4zMjYsNDcyLjg2MywxNzUuNjYyeiIgZmlsbD0iI2ZkN2UxNCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
              <p className="text-center m-auto"> Transfares</p>
              </Link>
            </div>

            <div className="card col-md-5 m-1 card-options" Link="statements" >
            <Link to="/statements">
              <img className="mx-auto" style={{width:"50px"}}  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ0MCAwaC0yODhjLTIyLjA4MjAzMS4wMjczNDM4LTM5Ljk3MjY1NiAxNy45MTc5NjktNDAgNDB2MTg0aDE2di0xODRjMC0xMy4yNTM5MDYgMTAuNzQ2MDk0LTI0IDI0LTI0aDIwMHY0MGMuMDI3MzQ0IDIyLjA4MjAzMSAxNy45MTc5NjkgMzkuOTcyNjU2IDQwIDQwaDQwdjMxMmMwIDEzLjI1MzkwNi0xMC43NDYwOTQgMjQtMjQgMjRoLTEyMHYxNmgxNTJjMjIuMDgyMDMxLS4wMjczNDQgMzkuOTcyNjU2LTE3LjkxNzk2OSA0MC00MHYtMzY4Yy0uMDI3MzQ0LTIyLjA4MjAzMS0xNy45MTc5NjktMzkuOTcyNjU2Mi00MC00MHptLTQ4IDgwYy0xMy4yNTM5MDYgMC0yNC0xMC43NDYwOTQtMjQtMjR2LTI4LjY4NzVsNTIuNjg3NSA1Mi42ODc1em03MiAzMjhjMCAxMy4yNTM5MDYtMTAuNzQ2MDk0IDI0LTI0IDI0aC0uMjA3MDMxYzUuMjkyOTY5LTYuODgyODEyIDguMTc1NzgxLTE1LjMxNjQwNiA4LjIwNzAzMS0yNHYtMzIwYzAtLjE3NTc4MS0uMDg5ODQ0LS4zMjgxMjUtLjEwNTQ2OS0uNTAzOTA2LS4wMzkwNjItLjY5OTIxOS0uMTc1NzgxLTEuMzk0NTMyLS40MDYyNS0yLjA1NDY4OC0uMDg5ODQzLS4yNTc4MTItLjE1MjM0My0uNTAzOTA2LS4yNjU2MjUtLjc1MzkwNi0uMzg2NzE4LS44NzEwOTQtLjkyNTc4MS0xLjY2NDA2Mi0xLjU5NzY1Ni0yLjM0Mzc1bC02Ni4zMTI1LTY2LjM0Mzc1aDYwLjY4NzVjMTMuMjUzOTA2IDAgMjQgMTAuNzQ2MDk0IDI0IDI0em0wIDAiIGZpbGw9IiNmZDdlMTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNTIgMjA4djE2aDE2OHYyNGgtODB2MTZoODB2MjRoLTMydjE2aDMydjI0aC0zMnYxNmgzMnYyNGgtNDh2MTZoMTM2di0xNmgtNzJ2LTI0aDcydi0xNmgtNzJ2LTI0aDcydi0xNmgtNzJ2LTI0aDcydi0xNmgtNzJ2LTI0aDcydi0xNmgtNzJ2LTI0aDcydi0xNmgtMjU2djE2aDE2OHYyNHptMCAwIiBmaWxsPSIjZmQ3ZTE0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjcyIDQwMGgxMzZ2MTZoLTEzNnptMCAwIiBmaWxsPSIjZmQ3ZTE0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjQwIDU2aDk2djE2aC05NnptMCAwIiBmaWxsPSIjZmQ3ZTE0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjQwIDg4aDQ4djE2aC00OHptMCAwIiBmaWxsPSIjZmQ3ZTE0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMzA0IDg4aDMydjE2aC0zMnptMCAwIiBmaWxsPSIjZmQ3ZTE0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjQwIDEyMGg5NnYxNmgtOTZ6bTAgMCIgZmlsbD0iI2ZkN2UxNCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI2NCA0MzJoLTh2LTk2aDhjNC40MTc5NjkgMCA4LTMuNTgyMDMxIDgtOHYtNDBjMC0zLjQ5MjE4OC0yLjI2NTYyNS02LjU4MjAzMS01LjYwMTU2Mi03LjYzMjgxMmwtMTI4LTQwYy0xLjU1ODU5NC0uNDkyMTg4LTMuMjM4MjgyLS40OTIxODgtNC43OTY4NzYgMGwtMTI4IDQwYy0zLjMzNTkzNyAxLjA1MDc4MS01LjYwMTU2MiA0LjE0MDYyNC01LjYwMTU2MiA3LjYzMjgxMnY0MGMwIDQuNDE3OTY5IDMuNTgyMDMxIDggOCA4aDh2OTZoLThjLTQuNDE3OTY5IDAtOCAzLjU4MjAzMS04IDh2MzJjMCA0LjQxNzk2OSAzLjU4MjAzMSA4IDggOGgyNTZjNC40MTc5NjkgMCA4LTMuNTgyMDMxIDgtOHYtMzJjMC00LjQxNzk2OS0zLjU4MjAzMS04LTgtOHptLTI0IDBoLTE2di05NmgxNnptLTQ4IDB2LTk2aDE2djk2em0tNjQgMHYtOTZoMTZ2OTZ6bS02NCAwdi05NmgxNnY5NnptMzItOTZoMTZ2OTZoLTE2em02NCAwaDE2djk2aC0xNnptLTE0NC00Mi4xMjEwOTQgMTIwLTM3LjQ5NjA5NCAxMjAgMzcuNDk2MDk0djI2LjEyMTA5NGgtMjQwem0xNiA0Mi4xMjEwOTRoMTZ2OTZoLTE2em0yMjQgMTI4aC0yNDB2LTE2aDI0MHptMCAwIiBmaWxsPSIjZmQ3ZTE0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTUyIDI4OGMwIDguODM1OTM4LTcuMTY0MDYyIDE2LTE2IDE2cy0xNi03LjE2NDA2Mi0xNi0xNiA3LjE2NDA2Mi0xNiAxNi0xNiAxNiA3LjE2NDA2MiAxNiAxNnptMCAwIiBmaWxsPSIjZmQ3ZTE0IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTc2IDQwdjE2Yy0xMy4yNTM5MDYgMC0yNCAxMC43NDYwOTQtMjQgMjRzMTAuNzQ2MDk0IDI0IDI0IDI0aDE2YzQuNDE3OTY5IDAgOCAzLjU4MjAzMSA4IDhzLTMuNTgyMDMxIDgtOCA4aC0zMnYxNmgxNnYxNmgxNnYtMTZjMTMuMjUzOTA2IDAgMjQtMTAuNzQ2MDk0IDI0LTI0cy0xMC43NDYwOTQtMjQtMjQtMjRoLTE2Yy00LjQxNzk2OSAwLTgtMy41ODIwMzEtOC04czMuNTgyMDMxLTggOC04aDMydi0xNmgtMTZ2LTE2em0wIDAiIGZpbGw9IiNmZDdlMTQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
              <p className="text-center m-auto">Statement</p>
              </Link>
            </div>
            </div>
          </div>
          
      </div>


      </div>
     
    )
  }
  
const mapStateToProps = (state) =>
{
  return{ users : state.firestoreReducer.ordered.users}
 
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout : ()=>dispatch(signOut())
  }
}
  export default compose(
    firestoreConnect([{ collection : 'users'}]),
    connect(mapStateToProps,mapDispatchToProps)
) (Dashboard);
  