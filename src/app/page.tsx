import {SignInForm} from '@/widgets/signInForm';
import styles from './page.module.css';

export default function SignIn() {
    return (
        <main className={styles.content}>
            <section className={styles.formWrapper}>
                <SignInForm />
            </section>
        </main>
    );
}
