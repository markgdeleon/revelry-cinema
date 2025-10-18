export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="px-8 sm:px-12 lg:px-16 py-12">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Revelry Cinema
        </p>
      </div>
    </footer>
  );
}
