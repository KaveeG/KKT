interface Props {
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
  label?: string;
}

export default function FilterSelect({ value, onChange, options, label }: Props) {
  return (
    <select
      aria-label={label}
      className="filter-select"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {options.map(o => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}
