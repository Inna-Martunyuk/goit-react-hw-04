import css from "./ErrorMessage.module.css"

function ErrorMessage({ error }) {
  return (
    <div className={css.error}>
      <p>😬 Whoops, something went wrong!</p>
      <p>🔄 Please try reloading this page!</p>
      
    </div>
  );
}
export default ErrorMessage;