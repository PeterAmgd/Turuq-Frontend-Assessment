type InfoCardProps = {
  label: string;
  value: string;
};

export function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="tag-card px-5 pb-5 pt-8">
      <p className="tag-label">{label}</p>
      <p className="mt-2 text-xl font-semibold leading-snug">{value}</p>
    </div>
  );
}
