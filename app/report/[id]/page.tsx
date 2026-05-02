"use client"

import { useScanStore } from "@/store/scanStore"
import { useRouter } from "next/navigation"
import { getVulnerabilityInfo } from "@/lib/constants/severityMapping"

export default function IssueDetailPage() {
    const router = useRouter()
    const selectedResult = useScanStore((state) => state.selectedResult)

    if (!selectedResult) {
        router.push("/report")
        return null
    }

    // CWE 코드 추출 (예: "CWE-89: ..." → "CWE-89")
    const cweRaw = selectedResult.extra.metadata.cwe?.[0] ?? ""
    const cweCode = cweRaw.split(":")[0].trim()
    const vulnInfo = getVulnerabilityInfo(cweCode)

    return (
        <div className="flex">

            {/* 왼쪽 사이드바: 이슈 목록 */}
            <aside>
                <button onClick={() => router.push("/report")}>← 뒤로가기</button>
                {/* 나중에 이슈 목록 넣기 */}
            </aside>

            {/* 오른쪽 메인 */}
            <main className="flex-1">

                {/* 헤더 */}
                <div>
                    <span>{vulnInfo.severity.toUpperCase()}</span>
                    <span>{vulnInfo.title}</span>
                    <span>{cweCode}</span>
                </div>
                <h1>{vulnInfo.title}</h1>
                <p>{selectedResult.path} · L{selectedResult.start.line}</p>

                {/* 1. The risk */}
                <div>
                    <h2>1. The risk — in plain words</h2>
                    <p>{vulnInfo.risk ?? vulnInfo.description}</p>
                </div>

                {/* 2. How to fix */}
                <div>
                    <h2>2. How to fix it</h2>
                    {vulnInfo.howToFix ? (
                        <ol>
                            {vulnInfo.howToFix.map((fix, i) => (
                                <li key={i}>{fix}</li>
                            ))}
                        </ol>
                    ) : (
                        <p>수정 방법 정보가 없습니다.</p>
                    )}
                </div>

                {/* 3. Before / After */}
                {vulnInfo.beforeCode && vulnInfo.afterCode && (
                    <div>
                        <h2>3. Before / After</h2>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <p>Before</p>
                                <pre>{vulnInfo.beforeCode}</pre>
                            </div>
                            <div className="flex-1">
                                <p>After</p>
                                <pre>{vulnInfo.afterCode}</pre>
                            </div>
                        </div>
                    </div>
                )}

                {/* 메타데이터 */}
                <div>
                    <h2>METADATA</h2>
                    <p>CWE: {cweCode}</p>
                    <p>OWASP: {vulnInfo.owasp}</p>
                </div>

                {/* 참고자료 */}
                <div>
                    <h2>REFERENCES</h2>
                    {selectedResult.extra.metadata.references?.map((ref, i) => (
                        <a key={i} href={ref} target="_blank">{ref}</a>
                    ))}
                </div>

            </main>
        </div>
    )
}