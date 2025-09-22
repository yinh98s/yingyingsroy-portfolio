export default function SkillPill({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-3 py-1 text-sm">
{label}
</span>
    );
}