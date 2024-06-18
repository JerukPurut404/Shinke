using System;
using TMPro;
using UnityEngine;

public class StopWatch : MonoBehaviour
{
    private bool _timerActive;
    private float _currentTime;
    [SerializeField] private TMP_Text _text;

    public void StartTimer()
    {
        _timerActive = true;
    }
    public void StopTimer()
    {
        _timerActive = false;
    }

    void Start()
    {
        StartTimer();
        _currentTime = 0;

    }

    // Update is called once per frame
    void Update()
    {
        if (_timerActive)
        {
            _currentTime = _currentTime + Time.deltaTime;
        }
        TimeSpan time = TimeSpan.FromSeconds(_currentTime);
        _text.text = time.Minutes.ToString() + ":" + time.Seconds.ToString();
    }
}
