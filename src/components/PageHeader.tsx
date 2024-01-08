type PageHeaderProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  description?: string;
};

export default function PageHeader({
  icon,
  title,
  subtitle,
  description,
}: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-zinc-300">
      <div className="container px-4 pb-12 pt-36">
        {icon}
        <div className="mt-6">
          <h1 className="font-header text-6xl font-bold uppercase text-zinc-300">
            {title}
          </h1>
          <div className="font-header text-xl font-medium uppercase text-yellow-600">
            {subtitle}
          </div>
          {description && <div className="mt-4 lg:text-lg">{description}</div>}
        </div>
      </div>
    </div>
  );
}
