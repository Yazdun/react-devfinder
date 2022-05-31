import Moment from 'react-moment'
import css from './styles.module.css'

export const Profile = props => {
  const { login, name, created_at, avatar_url } = props
  return (
    <div className={css.profile}>
      <img className={css.image} src={avatar_url} alt={name} />
      <div className={css.info}>
        <div>
          <h2 className={css.name}>{name}</h2>
          <span className={css.login}>@{login}</span>
        </div>
        <span className={css.join}>
          Joined <Moment format="D MMM YYYY" withTitle date={created_at} />
        </span>
      </div>
    </div>
  )
}
