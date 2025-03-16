export default function Page() {
  const key = process.env.SAMPLE_SECRET_KEY;
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <p>環境変数の値：{key}</p>
    </>
  );
}