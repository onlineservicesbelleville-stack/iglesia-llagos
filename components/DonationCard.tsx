interface DonationMethod {
  label: string;
  value: string;
  icon: string;
}

interface DonationCardProps {
  method: DonationMethod;
}

export default function DonationCard({ method }: DonationCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center border border-cream-200 flex flex-col items-center gap-3">
      <span className="text-4xl">{method.icon}</span>
      <h3 className="text-marian-600 font-bold text-lg">{method.label}</h3>
      <p className="text-gray-500 text-sm bg-cream-100 px-4 py-2 rounded-full w-full font-mono">
        {method.value}
      </p>
    </div>
  );
}
