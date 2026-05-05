import type {NextConfig} from "next"

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""
const isUserOrOrgPage = repository.endsWith(".github.io")
const shouldUseBasePath = Boolean(repository) && !isUserOrOrgPage

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: shouldUseBasePath ? `/${repository}` : "",
  assetPrefix: shouldUseBasePath ? `/${repository}/` : "",
}

export default nextConfig