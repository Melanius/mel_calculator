import Calculator from '../components/Calculator';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">테마 전환형 계산기</h1>
      <Calculator />
    </div>
  );
}
