import styles from "./Strip.module.scss";

export default function Strip({ groups = 2 }: { groups?: number }) {
  return (
    <div id="strip" className={styles.strip}>
      {Array.from({ length: groups }, (_, i) => {
        return (
          <div key={i}>
            <p>Web Developer</p>
            <p>Mobile Developer</p>
            <p>Game Developer</p>
          </div>
        );
      })}
    </div>
  );
}
