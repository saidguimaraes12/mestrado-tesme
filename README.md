# Mestrado UFAM — Previsão de consumo de energia elétrica

Trabalho da disciplina TESME: aplicação de regressão linear e não linear
à previsão de consumo de energia elétrica.

## Conteúdo

| Notebook | O que faz |
|---|---|
| `notebook/ps1_questao5.ipynb` | Problem Set 1, item 5: previsão do pico diário de consumo a partir da temperatura máxima (reta, polinômio, RBF e kernel; perda quadrática e absoluta) |
| `notebook/ps1_questao6.ipynb` | Problem Set 1, item 6: limpeza e sincronização dos dados brutos de consumo e clima, agregação diária e regressão com múltiplas variáveis |
| `notebook/competicao_zenodo.ipynb` | Competição GECAD 2025: previsão horária do consumo de um prédio para o dia seguinte (RMSE e tempo de execução) |

## Estrutura

    dados/          dados de entrada (Problem Set 1 e competição)
    figuras/        gráficos gerados pelos notebooks
    notebook/       notebooks Jupyter com o código
    resultados/     previsões geradas para a competição
    apresentacao/   slides da apresentação

## Como rodar

    python -m venv .venv
    .venv\Scripts\Activate.ps1
    pip install -r requirements.txt

Depois, abra os notebooks no VS Code e selecione o kernel `.venv`.

## Fontes dos dados

- **Problem Set 1:** CMU 15-884 *Computational Methods for the Smart Grid*, J. Zico Kolter (2013) —
  https://www.cs.cmu.edu/~zkolter/course/15-884/assignments.html
- **Competição:** *2025 Competition on Electric Energy Consumption Forecast Adopting
  Multi-criteria Performance Metrics* (GECAD/ISEP), licença CC BY 4.0 —
  https://zenodo.org/records/16061225