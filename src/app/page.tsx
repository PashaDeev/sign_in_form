import {SignInForm} from '@/widgets/signInForm';
import styles from './page.module.css';

export default function SignIn() {
    return (
        <section className={styles.content}>
            <section className={styles.formWrapper}>
                <SignInForm />
            </section>
        </section>
    );
}
