import {SignInForm} from '@/widgets/signInForm';
import styles from './page.module.css';

export default function SignIn() {
    return (
        <section className={styles.content}>
            <SignInForm />
        </section>
    );
}
