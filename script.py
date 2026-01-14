import re

text = '''[paste the full text here]'''

sections = {}
current_section = None
current_question = None

for line in text.split('\n'):
    line = line.strip()
    if not line:
        continue
    if re.match(r'^\d+\.\s', line) and not re.match(r'^\d+\.\d+\.\s', line):
        # section title
        section_num = line.split('.')[0]
        sections[section_num] = {'title': line, 'questions': []}
        current_section = section_num
        current_question = None
    elif current_section and re.match(r'^\d+\.\d+\.\s', line):
        # question
        sections[current_section]['questions'].append({'question': line, 'guidance': []})
        current_question = sections[current_section]['questions'][-1]
    elif current_question:
        current_question['guidance'].append(line)

# Now generate HTML
html_sections = []
for num, sec in sections.items():
    html_sec = f'<section id="section{num}"><h2>{sec["title"]}</h2>'
    for q in sec['questions']:
        guidance = ' '.join(q['guidance']).strip()
        html_sec += f'<div class="question"><label>{q["question"]}</label><textarea placeholder="Provide details"></textarea><p style="color:blue">{guidance}</p></div>'
    html_sec += '</section>'
    html_sections.append(html_sec)

print('\n'.join(html_sections))