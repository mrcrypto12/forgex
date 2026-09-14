export function TeamCard({
  name,
  role,
  photo,
}: {
  name: string
  role: string
  photo: string
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
      <img
        src={photo}
        alt={name}
        width={112}
        height={112}
        className="h-28 w-28 rounded-2xl border border-border object-cover"
      />
      <h3 className="mt-4 font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-sm text-primary">{role}</p>
    </div>
  )
}