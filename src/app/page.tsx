import styles from './page.module.css';

export default function SignIn() {
    return (
        <section className={styles.content}>
            <form action="/">
                <h1>Sign In</h1>

                <section>
                    <label>
                        Email Address:
                        <input type="email" name="email" id="email" required autoFocus placeholder="me@example.com" />
                    </label>
                </section>

                <section>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            id="current-password"
                            autoComplete="current-password"
                            required
                            aria-describedby="password-constraints"
                            placeholder="••••••••••"
                        />
                        <button
                            type="button"
                            aria-label="Show password as plain text.
                    Warning: this will display your password on the screen."
                        >
                            Show password
                        </button>
                        <div id="password-constraints"></div>
                    </label>
                </section>

                <button type="submit">Sign in</button>
            </form>
        </section>
    );
}
